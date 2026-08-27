<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M20 8.04 7.878 20.164a2.857 2.857 0 0 1-4.041-4.04L15.959 4m-8.96 9h8m0-10 6 6m-2 6 1.5 1.6a2.001 2.001 0 1 1-3 0z\"/>";
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
