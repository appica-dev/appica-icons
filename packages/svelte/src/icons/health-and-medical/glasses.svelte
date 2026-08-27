<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M8 4H6L3 14m0 0v2.5a3.5 3.5 0 1 0 7 0V14zM16 4h2l3 10m0 0h-7v2.5a3.5 3.5 0 1 0 7 0zm-11 2h4\"/>";
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
