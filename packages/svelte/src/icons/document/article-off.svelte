<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M8 4h11a2 2 0 0 1 2 2v11m-1.172 2.821c-.26.118-.542.18-.828.179H5a2 2 0 0 1-2-2V6a2 2 0 0 1 1.156-1.814M7 8h1m4 0h5M7 12h5m4 0h1M7 16h9M3 3l18 18\"/>";
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
