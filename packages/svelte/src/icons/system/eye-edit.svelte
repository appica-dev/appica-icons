<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M11.192 17.966Q6.33 17.546 3 12q3.6-6 9-6 4.989 0 8.442 5.122M10 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0m8.42 3.61a2.1 2.1 0 1 1 2.97 2.97L18 22h-3v-3z\"/>";
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
