<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M4 9.5a5.5 5.5 0 1 0 11 0 5.5 5.5 0 0 0-11 0\"/><path d=\"M9 14.5a5.5 5.5 0 1 0 11 0 5.5 5.5 0 0 0-11 0\"/>";
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
