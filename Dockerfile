FROM nginx:1.18.0

EXPOSE 80

COPY ./build /var/www
COPY nginx.conf /etc/nginx/nginx.conf

ENTRYPOINT ["nginx", "-g", "daemon off;"]