<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M4 11.995V7.998A3.996 3.996 0 0 1 8 4h4m4 0v.01M20 4v.01m0 3.988v.01m0 3.987v.01M4 15.992v.01m16-.01v.01M4 19.99V20m4-.01V20m4-.01V20m4-.01V20m4-.01V20\"/>";
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
