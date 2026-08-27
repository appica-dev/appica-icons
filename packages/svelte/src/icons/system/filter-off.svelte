<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M8 4h12v2.172a2 2 0 0 1-.586 1.414L15.5 11.5M15 15v4l-6 2v-8.5L4.52 7.572A2 2 0 0 1 4 6.227V4M3 3l18 18\"/>";
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
