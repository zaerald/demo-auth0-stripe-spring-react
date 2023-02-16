FROM eclipse-temurin:17-jammy

VOLUME /tmp
COPY build/libs/*.jar app.jar

ENTRYPOINT ["java","-jar","/app.jar"]
