<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M3.5 8.7v5.7m0-5.7c0-2.687 0-4.031.879-4.865S6.672 3 9.5 3H12M3.5 8.7H12m-8.5 5.7c0 2.687 0 4.03.879 4.865s2.293.835 5.121.835H12m-8.5-5.7H12m0 5.7v-5.7m0 5.7h2.5c2.828 0 4.243 0 5.121-.835s.879-2.178.879-4.865V8.7c0-2.687 0-4.03-.879-4.865S17.328 3 14.5 3H12m0 11.4V8.7m0 0V3M6.333 20.1V22m11.333-1.9V22m-2.833-9.975v-.95\"/>";
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
