<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M8.812 4.793 12 3l8 4.5m0 0V16m0-8.5-5.457 3.07m3.175 7.214L12 21m0 0-8-4.5v-9M12 21v-9L4 7.5m0 0 2.223-1.25m9.777-1-4.35 2.447M9.086 9.139 8 9.75M3 3l18 18\"/>";
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
