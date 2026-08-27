<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M17.497 4 20.5 7.003M18.999 5.5 10.99 13.51m-2.226-2.218 4.444 4.444a.97.97 0 0 1 0 1.37l-2.706 2.707a4.112 4.112 0 0 1-5.815-5.816l2.707-2.705a.97.97 0 0 1 1.371 0z\"/>";
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
