<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M21 5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14M21 5v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2M21 5h-2.25C15.022 5 12 8.134 12 12s-3.022 7-6.75 7H3\"/>";
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
