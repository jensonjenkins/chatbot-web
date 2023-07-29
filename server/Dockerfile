FROM --platform=linux/x86_64 ubuntu AS base
FROM base
ENV PYTHONUNBUFFERED=1
COPY . /app
WORKDIR /app
RUN apt update && \
    apt install -y python3 python3-pip &&\
    pip install -r requirements.txt

EXPOSE 8000

CMD python3 manage.py runserver 0.0.0.0:8000