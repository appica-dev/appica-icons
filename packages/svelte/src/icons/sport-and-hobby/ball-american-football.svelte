<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m15 9-6 6m1-3 2 2m0-4 2 2m-6 9a5 5 0 0 0-5-5m5 5a5 5 0 0 1-5-5m5 5c7.18 0 13-5.82 13-13M3 16C3 8.82 8.82 3 16 3m0 0a5 5 0 0 1 5 5m-5-5a5 5 0 0 0 5 5\"/>";
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
