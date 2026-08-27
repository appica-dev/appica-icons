<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M16 3h5m0 0v5m0-5-7.536 7.536A5 5 0 0 0 12 14.07M8 3H3m0 0v5m0-5 7.536 7.536A5 5 0 0 1 12 14.07m0 0V21m0-6.93V15\"/>";
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
