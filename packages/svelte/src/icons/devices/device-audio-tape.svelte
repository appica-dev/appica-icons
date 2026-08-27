<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M21 17V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10m18 0a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2m18 0-4-3H7l-4 3\"/>";
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
