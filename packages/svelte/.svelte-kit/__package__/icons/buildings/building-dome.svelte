<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M6.856 22C6.313 20.014 6 17.687 6 15.2 6 7.91 8.686 2 12 2s6 5.91 6 13.2c0 2.487-.313 4.814-.856 6.8M3 22h18M15.552 5c-.95 4.205-6.432 2.734-8.805 6.196a1.405 1.405 0 0 0 .008 1.603C9.235 16.267 15.599 14.792 17.5 19M8.448 5c.95 4.205 6.432 2.734 8.805 6.196.33.481.331 1.128-.008 1.603C14.765 16.267 8.401 14.792 6.5 19\"/>";
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
