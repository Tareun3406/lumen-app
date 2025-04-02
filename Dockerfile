FROM nginx:stable-alpine
COPY dist /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80/tcp
ENV TZ=Asia/Seoul
ENTRYPOINT ["nginx", "-g", "daemon off;"]