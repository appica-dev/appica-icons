<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M20 7.5v9l-4 2.25M20 7.5l-4-2.25m4 2.25-4 2.25L12 12m4 6.75L12 21m4-2.25V14l4-2m-8 9-4-2.25M12 21v-9m-4 6.75L4 16.5v-9m4 11.25V14l-4-2m0-4.5 4-2.25M4 7.5l4 2.25L12 12M8 5.25 12 3l4 2.25m-8 0 4 2.25 4-2.25\"/>";
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
