<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M5 5v16M7.641 3.645A5 5 0 0 1 12 5a5 5 0 0 0 7 0v9a5 5 0 0 1-.544.463M5 14a5 5 0 0 1 7 0 4.98 4.98 0 0 0 3.437 1.429M3 3l18 18\"/>";
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
