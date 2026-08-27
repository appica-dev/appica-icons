<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M9 21h6m-3-5v5m0-5c-2.21 0-4-4.925-4-11m4 11c2.21 0 4-4.925 4-11M8 5c0 .53.421 1.04 1.172 1.414C9.922 6.79 10.939 7 12 7s2.078-.21 2.828-.586C15.578 6.04 16 5.53 16 5M8 5c0-.53.421-1.04 1.172-1.414C9.922 3.21 10.939 3 12 3s2.078.21 2.828.586C15.578 3.96 16 4.47 16 5\"/>";
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
