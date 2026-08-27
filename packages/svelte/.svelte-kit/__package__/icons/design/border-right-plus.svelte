<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M20 19.99V4m-4 0v.01M12 4v.01M8 4v.01M4 4v.01m0 3.988v.01m0 3.987v.01m0 3.987v.01m12 3.988V20m-4-.01V20m-4-.01V20m-4-.01V20m11-8.005H9m3-2.998v5.996\"/>";
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
