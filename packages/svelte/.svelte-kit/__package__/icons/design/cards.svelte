<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M14.75 4h.98c.26 0 .51.105.693.293.184.187.287.441.287.707v3.498m2.94-2.499q.389.168.753.315c.239.103.428.3.526.545.097.246.095.521-.007.765l-2.252 5.372m-15.088-5.8 6.995-3.108a.925.925 0 0 1 1.04.208q.134.139.205.319l4.825 11.896c.1.241.104.513.01.757a1 1 0 0 1-.513.546l-6.995 3.108a.92.92 0 0 1-1.041-.208 1 1 0 0 1-.205-.319L3.078 8.498a1.02 1.02 0 0 1-.01-.757 1 1 0 0 1 .514-.545\"/>";
</script>

<Icon
  innerSvg={innerSvg}
  fill={"none"}
  stroke={"currentColor"}
  stroke-width={"1.5"}
  stroke-linecap={"round"}
  stroke-linejoin={"round"}
  {...props}
/>
