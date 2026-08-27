<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M17.765 17.757 12 21m0 0-8-4.5v-9M12 21v-9L4 7.5m0 0 2.236-1.258m2.57-1.445L12 3l8 4.5m0 0V16m0-8.5-5.439 3.059M3 3l18 18\"/>";
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
