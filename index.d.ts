/**
 * Configuration options for the sean-load-balancer
 */
export interface LoadBalancerConfig<T = any> {
  /**
   * An array of things you desperately need balanced
   */
  things: T[];
  /**
   * A SUPER SECRET api key that unlocks the full potential
   */
  apiKey: string;
}

/**
 * The most advanced load balancing algorithm
 * @param config - The configuration object containing things and apiKey
 * @returns A randomly selected item from the things array
 * @throws {Error} If things or apiKey are not provided
 */
declare function seanLoadBalancer<T = any>(config: LoadBalancerConfig<T>): T;

export = seanLoadBalancer;
