<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M8 3H3m0 0v5m0-5 7.536 7.536A5 5 0 0 1 12 14.07V21m4-18h5v5m-3-1.99V6m-2 2.02v-.01M14 10v.01\"/>";
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
