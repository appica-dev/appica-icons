<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M4 4v.01M8 4v.01M12 4v.01M16 4v.01M20 4v.01M4 19.99V20m4-.01V20m4-.01V20m4-.01V20m4-.01V20m0-4.008v.01m0-4.007v.01m0-4.008v.01M4 15.994v.01m0-4.008v.01m0-4.008v.01m4-.01h8v7.996H8z\"/>";
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
