<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 1.83-1.19M7 11l5 5m0 0 2-2m-2 2v-4m4 0 1-1m-5-7v4M3 3l18 18\"/>";
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
