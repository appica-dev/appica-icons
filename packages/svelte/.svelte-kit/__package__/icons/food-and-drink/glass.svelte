<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M8 21h8m-4-5v5m0-5c3.314 0 6-1.988 6-5l-1-6m-5 11c-3.314 0-6-1.988-6-5l1-6m10 0c0 .53-.527 1.04-1.464 1.414C14.598 6.79 13.326 7 12 7s-2.598-.21-3.536-.586C7.527 6.04 7 5.53 7 5m10 0c0-.53-.527-1.04-1.464-1.414C14.598 3.21 13.326 3 12 3s-2.598.21-3.536.586C7.527 3.96 7 4.47 7 5\"/>";
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
