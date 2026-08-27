<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path fill=\"currentColor\" d=\"M11.5 12a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0\"/><path d=\"M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\"/><path d=\"M11.5 12a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0\"/>";
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
