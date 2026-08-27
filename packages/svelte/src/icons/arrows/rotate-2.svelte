<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M15.051 4.58a8.07 8.07 0 0 0-8.75 1.824 7.988 7.988 0 0 0-1.657 8.752 8.03 8.03 0 0 0 4.396 4.295m0-4.441V20H4.031M18.427 7.185v.01m-5.38 12.745v.01m3.847-1.577v.01m2.535-3.273v.01M20 11.018v.01\"/>";
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
