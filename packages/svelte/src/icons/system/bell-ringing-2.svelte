<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m7.504 12.29-.7.701a2.974 2.974 0 0 0 4.205 4.206l.7-.701M19.42 4.58a1.983 1.983 0 0 1 0 2.804 6.94 6.94 0 0 1-1.401 7.01l-2.103 2.101A3.97 3.97 0 0 0 15.214 20L4 8.787a3.97 3.97 0 0 0 3.504-.7l2.102-2.105a6.94 6.94 0 0 1 7.01-1.402 1.98 1.98 0 0 1 2.804 0\"/>";
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
