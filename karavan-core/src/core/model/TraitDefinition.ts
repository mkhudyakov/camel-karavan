/**
 * Generated by karavan build tools - do NOT edit this file!
 */
import {CamelElement} from "./IntegrationDefinition";

export class Trait extends CamelElement {
    affinity?: AffinityTrait;
    builder?: BuilderTrait;
    camel?: CamelTrait;
    container?: ContainerTrait;
    cron?: CronTrait;
    dependencies?: DependenciesTrait;
    deployer?: DeployerTrait;
    deployment?: DeploymentTrait;
    environment?: EnvironmentTrait;
    errorHandler?: ErrorHandlerTrait;
    gc?: GcTrait;
    health?: HealthTrait;
    ingress?: IngressTrait;
    istio?: IstioTrait;
    jolokia?: JolokiaTrait;
    jvm?: JvmTrait;
    kamelets?: KameletsTrait;
    keda?: KedaTrait;
    knativeService?: KnativeServiceTrait;
    knative?: KnativeTrait;
    logging?: LoggingTrait;
    master?: MasterTrait;
    mount?: MountTrait;
    openapi?: OpenapiTrait;
    owner?: OwnerTrait;
    pdb?: PdbTrait;
    platform?: PlatformTrait;
    pod?: PodTrait;
    prometheus?: PrometheusTrait;
    pullSecret?: PullSecretTrait;
    quarkus?: QuarkusTrait;
    route?: RouteTrait;
    serviceBinding?: ServiceBindingTrait;
    service?: ServiceTrait;
    threeScale?: ThreeScaleTrait;
    toleration?: TolerationTrait;
    tracing?: TracingTrait;
    public constructor(init?: Partial<Trait>) {
        super('Trait')
        Object.assign(this, init)
    }
}
export class AffinityTrait extends CamelElement {
    enabled?: boolean;
    podAffinity?: boolean;
    podAntiAffinity?: boolean;
    nodeAffinityLabels?: string[];
    podAffinityLabels?: string[];
    podAntiAffinityLabels?: string[];
    public constructor(init?: Partial<AffinityTrait>) {
        super('AffinityTrait')
        Object.assign(this, init)
    }
}

export class BuilderTrait extends CamelElement {
    enabled?: boolean;
    verbose?: boolean;
    properties?: string[];
    public constructor(init?: Partial<BuilderTrait>) {
        super('BuilderTrait')
        Object.assign(this, init)
    }
}

export class CamelTrait extends CamelElement {
    enabled?: boolean;
    runtimeVersion?: string;
    properties?: string[];
    public constructor(init?: Partial<CamelTrait>) {
        super('CamelTrait')
        Object.assign(this, init)
    }
}

export class ContainerTrait extends CamelElement {
    enabled?: boolean;
    auto?: boolean;
    requestCpu?: string;
    requestMemory?: string;
    limitCpu?: string;
    limitMemory?: string;
    expose?: boolean;
    port?: string;
    portName?: string;
    servicePort?: string;
    servicePortName?: string;
    name?: string;
    image?: string;
    imagePullPolicy?: string;
    probesEnabled?: boolean;
    livenessScheme?: string;
    livenessInitialDelay?: number;
    livenessTimeout?: number;
    livenessPeriod?: number;
    livenessSuccessThreshold?: number;
    livenessFailureThreshold?: number;
    readinessScheme?: string;
    readinessInitialDelay?: number;
    readinessTimeout?: number;
    readinessPeriod?: number;
    readinessSuccessThreshold?: number;
    readinessFailureThreshold?: number;
    public constructor(init?: Partial<ContainerTrait>) {
        super('ContainerTrait')
        Object.assign(this, init)
    }
}

export class CronTrait extends CamelElement {
    enabled?: boolean;
    schedule?: string;
    components?: string;
    fallback?: boolean;
    concurrencyPolicy?: string;
    auto?: boolean;
    startingDeadlineSeconds?: number;
    activeDeadlineSeconds?: number;
    backoffLimit?: number;
    public constructor(init?: Partial<CronTrait>) {
        super('CronTrait')
        Object.assign(this, init)
    }
}

export class DependenciesTrait extends CamelElement {
    public constructor(init?: Partial<DependenciesTrait>) {
        super('DependenciesTrait')
        Object.assign(this, init)
    }
}

export class DeployerTrait extends CamelElement {
    enabled?: boolean;
    kind?: string;
    public constructor(init?: Partial<DeployerTrait>) {
        super('DeployerTrait')
        Object.assign(this, init)
    }
}

export class DeploymentTrait extends CamelElement {
    enabled?: boolean;
    progressDeadlineSeconds?: number;
    public constructor(init?: Partial<DeploymentTrait>) {
        super('DeploymentTrait')
        Object.assign(this, init)
    }
}

export class EnvironmentTrait extends CamelElement {
    enabled?: boolean;
    containerMeta?: boolean;
    httpProxy?: boolean;
    vars?: string[];
    public constructor(init?: Partial<EnvironmentTrait>) {
        super('EnvironmentTrait')
        Object.assign(this, init)
    }
}

export class ErrorHandlerTrait extends CamelElement {
    enabled?: boolean;
    ref?: string;
    public constructor(init?: Partial<ErrorHandlerTrait>) {
        super('ErrorHandlerTrait')
        Object.assign(this, init)
    }
}

export class GcTrait extends CamelElement {
    enabled?: boolean;
    discoveryCache?: string;
    public constructor(init?: Partial<GcTrait>) {
        super('GcTrait')
        Object.assign(this, init)
    }
}

export class HealthTrait extends CamelElement {
    enabled?: boolean;
    livenessProbeEnabled?: boolean;
    livenessScheme?: string;
    livenessInitialDelay?: number;
    livenessTimeout?: number;
    livenessPeriod?: number;
    livenessSuccessThreshold?: number;
    livenessFailureThreshold?: number;
    readinessProbeEnabled?: boolean;
    readinessScheme?: string;
    readinessInitialDelay?: number;
    readinessTimeout?: number;
    readinessPeriod?: number;
    readinessSuccessThreshold?: number;
    readinessFailureThreshold?: number;
    public constructor(init?: Partial<HealthTrait>) {
        super('HealthTrait')
        Object.assign(this, init)
    }
}

export class IngressTrait extends CamelElement {
    enabled?: boolean;
    host?: string;
    auto?: boolean;
    public constructor(init?: Partial<IngressTrait>) {
        super('IngressTrait')
        Object.assign(this, init)
    }
}

export class IstioTrait extends CamelElement {
    enabled?: boolean;
    allow?: string;
    inject?: boolean;
    public constructor(init?: Partial<IstioTrait>) {
        super('IstioTrait')
        Object.assign(this, init)
    }
}

export class JolokiaTrait extends CamelElement {
    enabled?: boolean;
    caCert?: string;
    clientPrincipal?: string[];
    discoveryEnabled?: boolean;
    extendedClientCheck?: boolean;
    host?: string;
    password?: string;
    port?: string;
    protocol?: string;
    user?: string;
    useSslClientAuthentication?: boolean;
    options?: string[];
    public constructor(init?: Partial<JolokiaTrait>) {
        super('JolokiaTrait')
        Object.assign(this, init)
    }
}

export class JvmTrait extends CamelElement {
    enabled?: boolean;
    debug?: boolean;
    debugSuspend?: boolean;
    printCommand?: boolean;
    debugAddress?: string;
    options?: string[];
    classpath?: string;
    public constructor(init?: Partial<JvmTrait>) {
        super('JvmTrait')
        Object.assign(this, init)
    }
}

export class KameletsTrait extends CamelElement {
    enabled?: boolean;
    auto?: boolean;
    list?: string;
    public constructor(init?: Partial<KameletsTrait>) {
        super('KameletsTrait')
        Object.assign(this, init)
    }
}

export class KedaTrait extends CamelElement {
    enabled?: boolean;
    auto?: boolean;
    hackControllerReplicas?: boolean;
    pollingInterval?: number;
    cooldownPeriod?: number;
    idleReplicaCount?: number;
    minReplicaCount?: number;
    maxReplicaCount?: number;
    triggers?: string;
    public constructor(init?: Partial<KedaTrait>) {
        super('KedaTrait')
        Object.assign(this, init)
    }
}

export class KnativeServiceTrait extends CamelElement {
    enabled?: boolean;
    autoscalingClass?: string;
    autoscalingMetric?: string;
    autoscalingTarget?: string;
    minScale?: string;
    maxScale?: string;
    rolloutDuration?: string;
    auto?: boolean;
    public constructor(init?: Partial<KnativeServiceTrait>) {
        super('KnativeServiceTrait')
        Object.assign(this, init)
    }
}

export class KnativeTrait extends CamelElement {
    enabled?: boolean;
    configuration?: string;
    channelSources?: string[];
    channelSinks?: string[];
    endpointSources?: string[];
    endpointSinks?: string[];
    eventSources?: string[];
    eventSinks?: string[];
    filterSourceChannels?: boolean;
    sinkBinding?: boolean;
    auto?: boolean;
    public constructor(init?: Partial<KnativeTrait>) {
        super('KnativeTrait')
        Object.assign(this, init)
    }
}

export class LoggingTrait extends CamelElement {
    enabled?: boolean;
    color?: boolean;
    format?: string;
    level?: string;
    json?: boolean;
    jsonPrettyPrint?: boolean;
    public constructor(init?: Partial<LoggingTrait>) {
        super('LoggingTrait')
        Object.assign(this, init)
    }
}

export class MasterTrait extends CamelElement {
    enabled?: boolean;
    auto?: boolean;
    includeDelegateDependencies?: boolean;
    resourceName?: string;
    resourceType?: string;
    labelKey?: string;
    labelValue?: string;
    public constructor(init?: Partial<MasterTrait>) {
        super('MasterTrait')
        Object.assign(this, init)
    }
}

export class MountTrait extends CamelElement {
    enabled?: boolean;
    configs?: string[];
    resources?: string[];
    volumes?: string[];
    public constructor(init?: Partial<MountTrait>) {
        super('MountTrait')
        Object.assign(this, init)
    }
}

export class OpenapiTrait extends CamelElement {
    enabled?: boolean;
    configmaps?: string[];
    public constructor(init?: Partial<OpenapiTrait>) {
        super('OpenapiTrait')
        Object.assign(this, init)
    }
}

export class OwnerTrait extends CamelElement {
    enabled?: boolean;
    targetAnnotations?: string[];
    targetLabels?: string[];
    public constructor(init?: Partial<OwnerTrait>) {
        super('OwnerTrait')
        Object.assign(this, init)
    }
}

export class PdbTrait extends CamelElement {
    enabled?: boolean;
    minAvailable?: string;
    maxUnavailable?: string;
    public constructor(init?: Partial<PdbTrait>) {
        super('PdbTrait')
        Object.assign(this, init)
    }
}

export class PlatformTrait extends CamelElement {
    enabled?: boolean;
    createDefault?: boolean;
    global?: boolean;
    auto?: boolean;
    public constructor(init?: Partial<PlatformTrait>) {
        super('PlatformTrait')
        Object.assign(this, init)
    }
}

export class PodTrait extends CamelElement {
    public constructor(init?: Partial<PodTrait>) {
        super('PodTrait')
        Object.assign(this, init)
    }
}

export class PrometheusTrait extends CamelElement {
    enabled?: boolean;
    podMonitor?: boolean;
    podMonitorLabels?: string[];
    public constructor(init?: Partial<PrometheusTrait>) {
        super('PrometheusTrait')
        Object.assign(this, init)
    }
}

export class PullSecretTrait extends CamelElement {
    enabled?: boolean;
    secretName?: string;
    imagePullerDelegation?: boolean;
    auto?: boolean;
    public constructor(init?: Partial<PullSecretTrait>) {
        super('PullSecretTrait')
        Object.assign(this, init)
    }
}

export class QuarkusTrait extends CamelElement {
    enabled?: boolean;
    packageType?: string;
    public constructor(init?: Partial<QuarkusTrait>) {
        super('QuarkusTrait')
        Object.assign(this, init)
    }
}

export class RouteTrait extends CamelElement {
    enabled?: boolean;
    host?: string;
    tlsTermination?: string;
    tlsCertificate?: string;
    tlsCertificateSecret?: string;
    tlsKey?: string;
    tlsKeySecret?: string;
    tlsCaCertificate?: string;
    tlsCaCertificateSecret?: string;
    tlsDestinationCaCertificate?: string;
    tlsDestinationCaCertificateSecret?: string;
    tlsInsecureEdgeTerminationPolicy?: string;
    public constructor(init?: Partial<RouteTrait>) {
        super('RouteTrait')
        Object.assign(this, init)
    }
}

export class ServiceBindingTrait extends CamelElement {
    enabled?: boolean;
    services?: string[];
    public constructor(init?: Partial<ServiceBindingTrait>) {
        super('ServiceBindingTrait')
        Object.assign(this, init)
    }
}

export class ServiceTrait extends CamelElement {
    enabled?: boolean;
    auto?: boolean;
    nodePort?: boolean;
    public constructor(init?: Partial<ServiceTrait>) {
        super('ServiceTrait')
        Object.assign(this, init)
    }
}

export class ThreeScaleTrait extends CamelElement {
    enabled?: boolean;
    auto?: boolean;
    scheme?: string;
    path?: string;
    port?: string;
    descriptionPath?: string;
    public constructor(init?: Partial<ThreeScaleTrait>) {
        super('ThreeScaleTrait')
        Object.assign(this, init)
    }
}

export class TolerationTrait extends CamelElement {
    enabled?: boolean;
    taints?: string[];
    public constructor(init?: Partial<TolerationTrait>) {
        super('TolerationTrait')
        Object.assign(this, init)
    }
}

export class TracingTrait extends CamelElement {
    enabled?: boolean;
    auto?: boolean;
    serviceName?: string;
    endpoint?: string;
    samplerType?: string;
    samplerParam?: string;
    public constructor(init?: Partial<TracingTrait>) {
        super('TracingTrait')
        Object.assign(this, init)
    }
}

export class TraitApi {

    static traitsFromYaml(yaml: any) {
        const traits: Trait = new Trait();
        Object.keys(yaml).forEach(key => {
            if (key === 'affinity') traits.affinity = new AffinityTrait(yaml.affinity.configuration);
            if (key === 'builder') traits.builder = new BuilderTrait(yaml.builder.configuration);
            if (key === 'camel') traits.camel = new CamelTrait(yaml.camel.configuration);
            if (key === 'container') traits.container = new ContainerTrait(yaml.container.configuration);
            if (key === 'cron') traits.cron = new CronTrait(yaml.cron.configuration);
            if (key === 'dependencies') traits.dependencies = new DependenciesTrait(yaml.dependencies.configuration);
            if (key === 'deployer') traits.deployer = new DeployerTrait(yaml.deployer.configuration);
            if (key === 'deployment') traits.deployment = new DeploymentTrait(yaml.deployment.configuration);
            if (key === 'environment') traits.environment = new EnvironmentTrait(yaml.environment.configuration);
            if (key === 'errorHandler') traits.errorHandler = new ErrorHandlerTrait(yaml.errorHandler.configuration);
            if (key === 'gc') traits.gc = new GcTrait(yaml.gc.configuration);
            if (key === 'health') traits.health = new HealthTrait(yaml.health.configuration);
            if (key === 'ingress') traits.ingress = new IngressTrait(yaml.ingress.configuration);
            if (key === 'istio') traits.istio = new IstioTrait(yaml.istio.configuration);
            if (key === 'jolokia') traits.jolokia = new JolokiaTrait(yaml.jolokia.configuration);
            if (key === 'jvm') traits.jvm = new JvmTrait(yaml.jvm.configuration);
            if (key === 'kamelets') traits.kamelets = new KameletsTrait(yaml.kamelets.configuration);
            if (key === 'keda') traits.keda = new KedaTrait(yaml.keda.configuration);
            if (key === 'knativeService') traits.knativeService = new KnativeServiceTrait(yaml.knativeService.configuration);
            if (key === 'knative') traits.knative = new KnativeTrait(yaml.knative.configuration);
            if (key === 'logging') traits.logging = new LoggingTrait(yaml.logging.configuration);
            if (key === 'master') traits.master = new MasterTrait(yaml.master.configuration);
            if (key === 'mount') traits.mount = new MountTrait(yaml.mount.configuration);
            if (key === 'openapi') traits.openapi = new OpenapiTrait(yaml.openapi.configuration);
            if (key === 'owner') traits.owner = new OwnerTrait(yaml.owner.configuration);
            if (key === 'pdb') traits.pdb = new PdbTrait(yaml.pdb.configuration);
            if (key === 'platform') traits.platform = new PlatformTrait(yaml.platform.configuration);
            if (key === 'pod') traits.pod = new PodTrait(yaml.pod.configuration);
            if (key === 'prometheus') traits.prometheus = new PrometheusTrait(yaml.prometheus.configuration);
            if (key === 'pullSecret') traits.pullSecret = new PullSecretTrait(yaml.pullSecret.configuration);
            if (key === 'quarkus') traits.quarkus = new QuarkusTrait(yaml.quarkus.configuration);
            if (key === 'route') traits.route = new RouteTrait(yaml.route.configuration);
            if (key === 'serviceBinding') traits.serviceBinding = new ServiceBindingTrait(yaml.serviceBinding.configuration);
            if (key === 'service') traits.service = new ServiceTrait(yaml.service.configuration);
            if (key === '3scale') traits.threeScale = new ThreeScaleTrait(yaml["3scale"].configuration);
            if (key === 'toleration') traits.toleration = new TolerationTrait(yaml.toleration.configuration);
            if (key === 'tracing') traits.tracing = new TracingTrait(yaml.tracing.configuration);
        });
        return traits;
    }

    static cloneTrait(t: Trait) {
        const clone = JSON.parse(JSON.stringify(t));
        const traits: Trait = new Trait();
        Object.keys(clone).forEach(key => {            if (key === 'affinity') traits.affinity = new AffinityTrait(clone.affinity);
            if (key === 'builder') traits.builder = new BuilderTrait(clone.builder);
            if (key === 'camel') traits.camel = new CamelTrait(clone.camel);
            if (key === 'container') traits.container = new ContainerTrait(clone.container);
            if (key === 'cron') traits.cron = new CronTrait(clone.cron);
            if (key === 'dependencies') traits.dependencies = new DependenciesTrait(clone.dependencies);
            if (key === 'deployer') traits.deployer = new DeployerTrait(clone.deployer);
            if (key === 'deployment') traits.deployment = new DeploymentTrait(clone.deployment);
            if (key === 'environment') traits.environment = new EnvironmentTrait(clone.environment);
            if (key === 'errorHandler') traits.errorHandler = new ErrorHandlerTrait(clone.errorHandler);
            if (key === 'gc') traits.gc = new GcTrait(clone.gc);
            if (key === 'health') traits.health = new HealthTrait(clone.health);
            if (key === 'ingress') traits.ingress = new IngressTrait(clone.ingress);
            if (key === 'istio') traits.istio = new IstioTrait(clone.istio);
            if (key === 'jolokia') traits.jolokia = new JolokiaTrait(clone.jolokia);
            if (key === 'jvm') traits.jvm = new JvmTrait(clone.jvm);
            if (key === 'kamelets') traits.kamelets = new KameletsTrait(clone.kamelets);
            if (key === 'keda') traits.keda = new KedaTrait(clone.keda);
            if (key === 'knativeService') traits.knativeService = new KnativeServiceTrait(clone.knativeService);
            if (key === 'knative') traits.knative = new KnativeTrait(clone.knative);
            if (key === 'logging') traits.logging = new LoggingTrait(clone.logging);
            if (key === 'master') traits.master = new MasterTrait(clone.master);
            if (key === 'mount') traits.mount = new MountTrait(clone.mount);
            if (key === 'openapi') traits.openapi = new OpenapiTrait(clone.openapi);
            if (key === 'owner') traits.owner = new OwnerTrait(clone.owner);
            if (key === 'pdb') traits.pdb = new PdbTrait(clone.pdb);
            if (key === 'platform') traits.platform = new PlatformTrait(clone.platform);
            if (key === 'pod') traits.pod = new PodTrait(clone.pod);
            if (key === 'prometheus') traits.prometheus = new PrometheusTrait(clone.prometheus);
            if (key === 'pullSecret') traits.pullSecret = new PullSecretTrait(clone.pullSecret);
            if (key === 'quarkus') traits.quarkus = new QuarkusTrait(clone.quarkus);
            if (key === 'route') traits.route = new RouteTrait(clone.route);
            if (key === 'serviceBinding') traits.serviceBinding = new ServiceBindingTrait(clone.serviceBinding);
            if (key === 'service') traits.service = new ServiceTrait(clone.service);
            if (key === 'threeScale') traits.threeScale = new ThreeScaleTrait(clone.threeScale);
            if (key === 'toleration') traits.toleration = new TolerationTrait(clone.toleration);
            if (key === 'tracing') traits.tracing = new TracingTrait(clone.tracing);
        });
        return traits;
    }
}
