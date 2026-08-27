<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M17 21v-6m2 0v-1.5m0 9V21m-2-3h3m-1 0h.5m0 0a1.5 1.5 0 1 1 0 3H16m3.5-3a1.5 1.5 0 1 0 0-3H16m-2.5 3.004H6.657C4.085 18 2 15.993 2 13.517s2.085-4.482 4.657-4.482c.393-1.762 1.794-3.2 3.675-3.773 1.88-.572 3.956-.193 5.444 1 1.28 1.023 1.957 2.51 1.873 4.027\"/>";
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
