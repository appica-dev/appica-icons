<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M15 3v4a1 1 0 0 0 1 1h4m-5-5h-4a2 2 0 0 0-2 2m6-2 5 5m0 0v7c0 .294-.063.572-.177.823M17 17h-6a2 2 0 0 1-2-2V9m7 8v2a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2M3 3l18 18\"/>";
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
