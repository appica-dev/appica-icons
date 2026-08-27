<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M16 18h3c.81 0 1.5.68 1.5 1.5l-.02.02c0 .81-.67 1.48-1.48 1.48h-3zm0 0h2.5c.84 0 1.5-.66 1.5-1.5s-.66-1.51-1.5-1.5H16zM4 9V5c0-1.036.895-2 2-2s2 .964 2 2v4m-5.01 2.98a9 9 0 0 0 9 9m9-9a9 9 0 0 0-9-9M8 7H4\"/>";
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
