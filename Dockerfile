# Dockerfile
FROM node:18

# 작업 디렉토리 설정
WORKDIR /usr/src/app

# Next.js와 Tailwind CSS 관련 설정 파일 복사
COPY package*.json ./
COPY tailwind.config.ts ./
COPY postcss.config.mjs ./

# 의존성 설치
RUN npm install

# 소스 코드 복사
COPY . .

# 빌드 명령어 실행
RUN npm run build

# 포트 설정 ( 도커 )
EXPOSE 4504

# 서버 실행
CMD [ "npm", "start" ]