# Nginx 공식 이미지를 기반으로 합니다
FROM nginx:alpine

# HTML과 CSS 파일을 컨테이너의 적절한 위치로 복사합니다
COPY index.html /usr/share/nginx/html/
COPY style.css /usr/share/nginx/html/

# (선택사항) 사용자 정의 Nginx 설정 파일을 사용하는 경우
# COPY nginx.conf /etc/nginx/nginx.conf

# 80 포트를 열어둡니다
EXPOSE 80

# Nginx를 실행합니다
CMD ["nginx", "-g", "daemon off;"]
