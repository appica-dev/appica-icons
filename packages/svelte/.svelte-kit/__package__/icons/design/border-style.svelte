<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M4 19.99V5.999A2 2 0 0 1 6 4h14m0 3.997v.01m0 3.988v.01m0 3.987v.01M8 19.99V20m4-.01V20m4-.01V20m4-.01V20\"/>";
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
