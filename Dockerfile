FROM nginx:alpine


RUN mkdir -p /data/log/nginx \
  && ln -sf /dev/stdout /data/log/nginx/mars.access.log \
  && ln -sf /dev/stderr /data/log/nginx/mars.error.log


COPY dist /data/dist
COPY mars.docker.conf /etc/nginx/conf.d/mars.conf

CMD nginx -g 'daemon off;'
