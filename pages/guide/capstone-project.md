# DevOps Project: QR Code Generator

An app that converts a URL to a QR Code. The app has three components: Front-end, API and Storage. All 3 components should be hosted in containers utilizing the cloud provider of your choice. The sample application code is provided, your goals is to apply DevOps practices like containerization, CI/CD, observability and monitoring for the application.

- **Front-End Container**: Hosts the website where users can input URLs.
- **API Container**: Handles the QR code generation for given URLs.
- **Storage Container**: Stores the generated QR codes.

## Details

### Application

- Front-End: A web application where users can submit URLs.
- API: An API that receives URLs and generates QR codes.
The API can store the QR codes in cloud storage(S3 Bucket, Azure Blob Storage, GCP Cloud Buckets).
- Storage: A storage solution (like Azure Blob Storage, AWS S3 or Google Cloud Storage) to hold the QR codes. Ensure security and accessibility for the stored data.

### Programming

A sample application is available here [rishabkumar7/devops-qr-code](https://github.com/rishabkumar7/devops-qr-code). It has the front-end built in NextJS, uses FastAPI Python framework for the API and AWS S3 for storage.

### To Do

- Containerization: Containerize both the front-end and API by creating a `Dockerfile`.
- CI/CD: Write CI/CD pipeline to automate deployment of the containers, once your source code is changed.
- Kubernetes YAML Files: Create deployment and service YAML files for both the Next.js front-end and the FastAPI backend.

#### Optional

Optionally you can customize the already provided app.
- Front-end: You can use any language of your choice or JavaScript frameworks like React, Vue or NextJS to build the front-end.
- API/Backend: Build an API for your QR Code generation, frameworks like [Flask](https://flask.palletsprojects.com/en/3.0.x/) or [FastAPI](https://fastapi.tiangolo.com/) will help you to create your Rest API.
- Storage: Sample app uses AWS S3. You can utilize cloud SDKs/modules (e.g., `boto3` for AWS, `google-cloud` for GCP, `azure` for Azure) to interact with cloud storage service from respective cloud providers.

### Deployment

- Setup Kubernetes service within your cloud provider (Azure AKS, Amazon EKS or GCP GKE).
- Containerize the front-end, API, and storage using Docker.
- Deploy these containers to the cluster.
- Ensure containers are interconnected for seamless data flow.
- Setup CI/CD pipeline to deploy the containers after source is changed.

### Implementation

- Web-app: Users are able to access the front-end, make sure the web-app is publicly accessible via a URL and has an input field to enter URLs.
- API: Once the URL is entered by a user, the web-app makes the request to the API container to convert the URL into a QR Code.
- Storage: The generated QR Code is stored and also displayed on the web-app for user.
- CI/CD: Setup CI/CD pipeline to deploy the containers and application after the source is changed. You can utilize tools like GitHub Actions or Azure DevOps.
- Monitoring: Setup monitoring for containers for key metrics and insights. You have Azure Monitor for AKS, Amazon CloudWatch Container Insights for EKS, or take it a step further by setting up Grafana.