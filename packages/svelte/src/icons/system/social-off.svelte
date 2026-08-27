<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 0v1m5.57 9.602a2 2 0 0 0 2.83 2.827m-9.287-9.296a3 3 0 1 0 3.765 3.715M6.7 17.8l2.8-2m7.8 2-2.8-2M3 3l18 18M3 19a2 2 0 1 0 4 0 2 2 0 0 0-4 0\"/>";
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
