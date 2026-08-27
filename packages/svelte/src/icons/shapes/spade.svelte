<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m12 3 4.919 4.5q.915.88 1.703 1.771a5.53 5.53 0 0 1 .264 6.979c-1.18 1.56-3.338 1.92-4.886.75v1l1 3H9l1-3v-1c-1.54 1.07-3.735.772-4.886-.75a5.53 5.53 0 0 1 .264-6.979A31 31 0 0 1 7.08 7.5Q9.535 5.244 12 3\"/>";
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
