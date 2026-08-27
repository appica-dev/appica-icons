<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M20 4v.01m0 15.98V20m0-4.008v.01m0-4.007v.01m0-4.008v.01M4 4v.01m0 15.98V20m0-4.008v.01m0-4.007v.01m0-4.008v.01M8 5A1 1 0 0 1 9 4h6a1 1 0 0 1 1 1v13.99a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1z\"/>";
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
