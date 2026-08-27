<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M16.5 5a4.5 4.5 0 1 1-.653 8.953L11.5 16.962V17a3 3 0 0 1-2.824 3H8.5a3 3 0 0 1-2.94-2.402L3 16.5V13l3.51 1.755a2.99 2.99 0 0 1 2.834-.635l2.727-3.818A4.502 4.502 0 0 1 16.5 5\"/>";
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
