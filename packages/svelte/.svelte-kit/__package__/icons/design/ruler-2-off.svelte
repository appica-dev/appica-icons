<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12.03 7.97 17 3l4 4-5 5m-2 2-7 7-4-4 7-7m6-3-1.5-1.5M10 13l-1.5-1.5M7 16l-1.5-1.5M3 3l18 18\"/>";
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
