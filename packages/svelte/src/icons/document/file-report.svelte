<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M21 17a4 4 0 1 1-4-4m4 4a4 4 0 0 0-4-4m4 4h-4v-4M12 3v4a1 1 0 0 0 1 1h4m-5-5H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6.5M12 3l5 5m0 0v2\"/>";
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
