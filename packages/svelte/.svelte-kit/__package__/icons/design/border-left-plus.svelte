<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M4 19.99V4m4 0v.01M12 4v.01M16 4v.01M20 4v.01m0 3.988v.01m0 3.987v.01m0 3.987v.01M8 19.99V20m4-.01V20m4-.01V20m4-.01V20M9 11.995h6m-3-2.998v5.996\"/>";
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
