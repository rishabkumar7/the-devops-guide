# IaC - Infrastructure as Code

## What is Infrastructure as Code?

Infrastructure as Code (IaC) is the managing and provisioning of infrastructure through code instead of through manual processes.
With IaC, configuration files are created that contain your infrastructure specifications, which makes it easier to edit and distribute configurations.

## Which tool to go for?

I personally recommend Terraform since it's cloud-agnostic, meaning it can work with different Cloud service providers.
You might have heard of other tools that are specific to a cloud provider, such as:

| Cloud Provider | IaC Tool |
| --- | ----------- |
| AWS | [CloudFormation](https://aws.amazon.com/cloudformation/) |
| Azure | [Bicep](https://learn.microsoft.com/en-us/azure/azure-resource-manager/bicep/overview?tabs=bicep) |
| GCP | [Google Cloud Deployment Manager](https://cloud.google.com/deployment-manager/docs) |

## What is Terraform?

Terraform was developed by [Hashicorp](https://www.hashicorp.com/). It is a configuration orchestration tool that is incredible for provisioning, adjusting and destroying the virtual server environments. It is available both as a DevOps-as-a-Service enterprise-grade from Hashicorp and as an open-source solution, which allows you to work with a variety of Cloud Service Providers to create multi-cloud ecosystems.

![Terraform Diagram](../assets/HashiCorpTerraform.webp)

### Resources

| Resource | Notes |
| --- | ----------- |
| [Terraform explained in 15 mins](https://youtu.be/l5k1ai_GBDE) | TechWorld with Nana explains what Terraform is, its use cases, how it works |
| [HashiCorp Learn](https://learn.hashicorp.com/terraform) | Build, change, and destroy infrastructure with Terraform. Start here to learn the basics of Terraform with your favorite cloud provider. |
| [freeCodeCamp Terraform Course](https://youtu.be/SLB_c_ayRMo) | Terraform Course - Automate your AWS cloud infrastructure |
| [Terraform notes](https://notes.rishab.cloud/terraform-associate) | Rishab's notes on Terraform |

## Next

[Go to next chapter: Configuration Management](../configuration-management/README.md)
