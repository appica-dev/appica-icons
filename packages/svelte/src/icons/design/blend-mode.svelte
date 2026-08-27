<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M8 9.5a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0m-5 5a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0\"/>";
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
