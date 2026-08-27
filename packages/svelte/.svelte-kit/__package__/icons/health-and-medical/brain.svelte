<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M15.5 13a3.5 3.5 0 0 0-3.5 3.5m0 0v1m0-1A3.5 3.5 0 0 0 8.5 13m3.5 3.5v-10m0 11a3.5 3.5 0 1 0 7 0v-1.8m-7 1.8a3.5 3.5 0 1 1-7 0v-1.8m12.5.3a3.5 3.5 0 1 0 0-7H17m2 .3V6.5a3.5 3.5 0 1 0-7 0m0 0a3.5 3.5 0 1 0-7 0v2.8M6.5 16a3.5 3.5 0 1 1 0-7H7\"/>";
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
